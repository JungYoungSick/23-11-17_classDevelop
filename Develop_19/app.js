const capsule = {
  id: "JungYoungSick",
  password: "305",
  email: "Junfas1216@example.com",
  getTotalDataString: function () {
    return `ID: ${this.id}, Password: ${this.password} Email: ${this.email}`;
  }
};
console.log(capsule.getTotalDataString());