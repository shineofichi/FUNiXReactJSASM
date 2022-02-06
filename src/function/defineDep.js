export const defineDep = (depname) => {
  switch (depname) {
    case "Sale":
      return {
        id: "Dept01",
        name: depname,
        numberOfStaff: "",
      };
    case "HR":
      return {
        id: "Dept02",
        name: depname,
        numberOfStaff: "",
      };
    case "Marketing":
      return {
        id: "Dept03",
        name: depname,
        numberOfStaff: "",
      };
    case "IT":
      return {
        id: "Dept04",
        name: depname,
        numberOfStaff: "",
      };
    default:
    case "Finance":
      return {
        id: "Dept05",
        name: depname,
        numberOfStaff: "",
      };
  }
};
