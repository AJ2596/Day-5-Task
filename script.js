// 1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

// for loop

const keys = Object.keys(resume);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(`${key}: ${resume[key]}`);
}
//----------------------------------------------

// Using for...in loop:

for (let key in resume) {
  console.log(`${key}: ${resume[key]}`);
}

//----------------------------------------------

//Using for...of loop

for (let value of Object.values(resume)) {
  console.log(value);
}

// ----------------------------------------------

// forEach loop

Object.entries(resume).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// ----------------------------------------------

// 2. Create your own resume data in JSON format

let resume = {
  basics: {
    name: "John Doe",
    label: "Programmer",
    picture: "",
    email: "john@gmail.com",
    phone: "(912) 555-4321",
    website: "http://johndoe.com",
    summary: "A summary of John Doe...",
    location: {
      address: "2712 Broadway St",
      postalCode: "CA 94115",
      city: "San Francisco",
      countryCode: "US",
      region: "California",
    },
  },
  work: [
    {
      company: "Company",
      position: "President",
      website: "http://company.com",
      startDate: "2013-01-01",
      endDate: "2014-01-01",
      summary: "Description...",
      highlights: ["Started the company"],
    },
  ],
  education: [
    {
      institution: "University",
      area: "Software Development",
      studyType: "Bachelor",
      startDate: "2011-01-01",
      endDate: "2013-01-01",
      gpa: "4.0",
      courses: ["DB1101 - Basic SQL"],
    },
  ],
  skills: [
    {
      name: "Web Development",
      level: "Master",
      keywords: ["HTML", "CSS", "Javascript"],
    },
  ],
};
