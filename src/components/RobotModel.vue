<template>
  <div class="container text-center" id="robotModel">
  </div>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'RobotModel',

  data() {
    return {
      robotContainer: null,
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },

  mounted() {
    this.init()
    this.animate()
    window.addEventListener('resize', this.onResize, false)
    // container


    // // scene
    // const scene = new three.Scene()
    //
    // // camera
    // // const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // const camera = new three.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    //
    // // renderer
    // const renderer = new three.WebGLRenderer();
    // // renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setSize(400, 400);
    // document.body.appendChild(renderer.domElement);
    //
    // // geometry
    // const geometry = new three.BoxGeometry();
    //
    // // background color ?
    // const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
    //
    // // cube
    // const cube = new three.Mesh(geometry, material);
    // scene.add(cube);
    //
    // camera.position.z = 5;
    //
    // const animate = function () {
    //   requestAnimationFrame(animate);
    //
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //
    //   renderer.render(scene, camera);
    // };
    //
    // animate();

    // loader
    // const loader = three.ObjectLoader()
    //
    // loader.load(
    //   "@assets/scene.json",
    //   function (obj) {
    //     scene.add(obj);
    //   },
    //   function (xhr) {
    //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    //   },
    //   function (err) {
    //     console.error('An error happened : ' + err);
    //   }
    //)
  },

  methods: {
    init: function() {
      this.robotContainer = document.getElementById('robotModel')

      this.camera = new Three.PerspectiveCamera(70, this.robotContainer.clientWidth/this.robotContainer.clientHeight, 0.01, 10);
      this.camera.position.z = 1;

      this.scene = new Three.Scene();

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      let material = new Three.MeshNormalMaterial();

      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new Three.WebGLRenderer({antialias: true});
      this.renderer.setSize(this.robotContainer.clientWidth, this.robotContainer.clientHeight);
      this.robotContainer.appendChild(this.renderer.domElement);

    },

    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    },

    onResize: function() {
      this.camera.aspect = this.robotContainer.clientWidth / this.robotContainer.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.robotContainer.clientWidth, this.robotContainer.clientHeight);
    }
  },
}
</script>

<style scoped lang="scss">
  #robotModel {
    height: 100vh;

    canvas {
      width: 100vw;
      height: 100vh
    }
  }
</style>
