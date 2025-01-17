import { CrewMember } from '@/models/movie';

export const getWriterNames = (crew: CrewMember[]) => {
  const writers: CrewMember[] | undefined = crew.filter((crewMember) => {
    return crewMember.job.toLowerCase() === 'screenplay';
  });
  const writersNames: string[] = writers.map((writer) => {
    return writer.name;
  });
  const slicedWritersNames: string[] = writersNames.slice(0, 2);
  const joinedWriters: string = slicedWritersNames.join(', ');

  return joinedWriters ?? ['N/A'];
};
