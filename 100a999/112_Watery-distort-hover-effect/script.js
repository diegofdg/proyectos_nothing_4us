var vertex = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
`;
var fragment = `
    varying vec2 vUv;
    uniform sampler2D texture1;
    uniform sampler2D texture2;
    uniform sampler2D disp;
    uniform float dispFactor;
    uniform float intensity1;
    uniform float intensity2;
    uniform float angle1;
    uniform float angle2;

    vec2 rotate(vec2 v, float a) {
        float s = sin(a);
        float c = cos(a);
        mat2 m = mat2(c, -s, s, c);
        return m * v;
    }

    void main() {
        vec4 disp = texture2D(disp, vUv);
        vec2 dispVec = vec2(disp.r, disp.g) * 2.0 - 1.0;
        vec2 distPos1 = vUv + rotate(dispVec, angle1) * intensity1 * dispFactor;
        vec2 distPos2 = vUv + rotate(dispVec, angle2) * intensity2 * (1.0 - dispFactor);
        gl_FragColor = mix(texture2D(texture1, distPos1), texture2D(texture2, distPos2), dispFactor);
    }
`;
var parent = document.getElementById('hoverTarget');

var scene = new THREE.Scene();
var camera = new THREE.OrthographicCamera(parent.offsetWidth / -2, parent.offsetWidth / 2, parent.offsetHeight / 2, parent.offsetHeight / -2, 1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: false });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(parent.offsetWidth, parent.offsetHeight);
parent.appendChild(renderer.domElement);

var loader = new THREE.TextureLoader();
loader.setCrossOrigin(''); // Handling CORS
var texture1 = loader.load('https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
var texture2 = loader.load('https://c0.wallpaperflare.com/preview/399/785/141/city-life-city-johannesburg-sandton.jpg');
var dispTexture = loader.load('https://images.pexels.com/photos/1097203/pexels-photo-1097203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?raw=true');

var uniforms = {
    "texture1": { type: "t", value: texture1 },
    "texture2": { type: "t", value: texture2 },
    "disp": { type: "t", value: dispTexture },
    "dispFactor": { type: "f", value: 0.0 },
    "intensity1": { type: "f", value: 0.2 },
    "intensity2": { type: "f", value: 0.1 },
    "angle1": { type: "f", value: Math.PI / 4 },
    "angle2": { type: "f", value: -Math.PI / 4 }
};

var material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    opacity: 1.0
});

var geometry = new THREE.PlaneBufferGeometry(parent.offsetWidth, parent.offsetHeight);
var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
camera.position.z = 1;

var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};
render();

parent.addEventListener("mouseenter", function() {
    gsap.to(uniforms.dispFactor, { duration: 1, value: 1 });
});

parent.addEventListener("mouseleave", function() {
    gsap.to(uniforms.dispFactor, { duration: 1, value: 0 });
});