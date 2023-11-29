import { faker } from "@faker-js/faker";
import { Candidate, Status } from "@prisma/client";

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newCandidate = (): Candidate => {
  return {
    id: faker.number.int(100),
    username: faker.person.firstName(),
    jobdesc: faker.company.name(),
    experience: faker.person.jobDescriptor(),
    countries: faker.helpers.shuffle(["mexico", " usa", "canada"])[0]!,
    hired: faker.helpers.shuffle<Status>([
      "hired",
      "considered",
      "discarded",
    ])[0]!,
    comments: "",
    createdAt: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]!;
    return range(len).map((d): any => {
      return {
        ...newCandidate(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
