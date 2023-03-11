import * as THREE from 'three';

export class TrafficSign {
  constructor() {
    // Create a new mesh for the traffic sign
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.05, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.mesh = new THREE.Mesh(geometry, material);

    // Load the texture and apply it to the mesh
    this.loadTexture();
  }

  loadTexture() {
    const textureLoader = new THREE.TextureLoader();
    const textureUrl = 'https://www.verkeersbordenoverzicht.nl/images/tekens/1.png';
    const texture = textureLoader.load(textureUrl);

    // Adjust the texture's offset and repeat to fit the cylinder geometry
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(0.5, 1);
    texture.offset.set(0.25, 0);

    // Apply the texture to the mesh's material
    this.mesh.material.map = texture;
    this.mesh.material.needsUpdate = true;
  }
}