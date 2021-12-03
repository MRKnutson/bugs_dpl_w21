const Vaccine = (props) => {
  const { baz, bam } = props;
  console.log("baz: ", baz);
  console.log("bam: ", bam);
};

foo({ baz: 11, bam: 12 });
foo({ baz: "anything", bam: "here" });
foo({ bazz: "anything", bamm: "here" });

// es6 destruction
let person = { name: "tony", age: 12 };
const { name, age } = person;
