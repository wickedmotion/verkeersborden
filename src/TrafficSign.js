class TrafficSign {
  constructor(sign, position, rotation) {
    this.mesh = sign.clone();
    this.mesh.position.copy(position);
    this.mesh.rotation.copy(rotation);
  }

  update() {
    // Code to update the sign's position or rotation goes here
  }
}