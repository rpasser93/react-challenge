import { CrewMember } from '@/models/movie';

export const getDirectorNames = (crew: CrewMember[]) => {
  const directors: CrewMember[] | undefined = crew.filter((crewMember) => {
    return crewMember.job.toLowerCase() === 'director';
  });
  const directorsNames: string[] = directors.map((director) => {
    return director.name;
  });
  const slicedDirectorsNames: string[] = directorsNames.slice(0, 2);
  const joinedDirectors: string = slicedDirectorsNames.join(', ');

  return joinedDirectors ?? ['N/A'];
};
