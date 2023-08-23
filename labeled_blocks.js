let groups = [
  ["Ram", "Seetha", "Ravi"],
  ["Kumar", "tiya", "sundar"],
  ["Rajesh", "sara", "Rahul"],
];

for (let group of groups) {
  inner: for (let member of group) {
    if (member.startsWith("R")) {
      console.log(member);
      break inner;
    }
  }
}
