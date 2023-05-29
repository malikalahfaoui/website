import { Conference } from "types/con";
import {
  sortByStartDate,
  toLocaleDate,
  convertTime,
  isMorningTime,
  getConferenceTimes,
  getConferenceDate,
} from "./index";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);

describe("Tests pour votre-composant", () => {
  describe("Test de la fonction sortByStartDate", () => {
    const conference1: Conference = {
      title: "Conference 1",
      date: "2023-05-28",
      start: "09:00",
      end: "12:00",
      track: "FR",
      edition: "jhgjhg",
      speakers: [
        {
          id: "speaker1",
          name: "John Doe",
          twitter: "@johndoe",
          github: "johndoe",
          job: "Software Engineer",
          company: "ABC Company",
          number: 1,
          description: "Description du speaker",
          slug: "john-doe",
          contentHtml: "<p>Contenu HTML du speaker</p>",
          edition: "2023",
          image: "chemin/vers/image.jpg",
          placeholder: "placeholder",
          url: "https://exemple.com/speaker1",
        },
        {
          id: "speaker1",
          name: "John Doe",
          twitter: "@johndoe",
          github: "johndoe",
          job: "Software Engineer",
          company: "ABC Company",
          number: 2,
          description: "Description du speaker",
          slug: "john-doe",
          contentHtml: "<p>Contenu HTML du speaker</p>",
          edition: "2023",
          image: "chemin/vers/image.jpg",
          placeholder: "placeholder",
          url: "https://exemple.com/speaker1",
        },
      ],
    };
    const conference2: Conference = {
      title: "Conference 2",
      date: "2023-05-28",
      start: "13:00",
      end: "16:00",
      track: "EN",
      edition: "jhgjhg",
      speakers: [
        {
          id: "speaker1",
          name: "John Doe",
          twitter: "@johndoe",
          github: "johndoe",
          job: "Software Engineer",
          company: "ABC Company",
          number: 1,
          description: "Description du speaker 1",
          slug: "john-doe",
          contentHtml: "<p>Contenu HTML du speaker 1</p>",
          edition: "2023",
          image: "chemin/vers/image1.jpg",
          placeholder: "placeholder",
          url: "https://exemple.com/speaker1",
        },
        {
          id: "speaker2",
          name: "Jane Smith",
          twitter: "@janesmith",
          github: "janesmith",
          job: "Web Developer",
          company: "XYZ Corporation",
          number: 2,
          description: "Description du speaker 2",
          slug: "jane-smith",
          contentHtml: "<p>Contenu HTML du speaker 2</p>",
          edition: "2023",
          image: "chemin/vers/image2.jpg",
          placeholder: "placeholder",
          url: "https://exemple.com/speaker2",
        },
      ],
    };

    test("Doit retourner -1 si la première conférence débute avant la seconde", () => {
      expect(sortByStartDate(conference1, conference2)).toEqual(-1);
    });

    test("Doit retourner 1 si la première conférence débute après la seconde", () => {
      expect(sortByStartDate(conference2, conference1)).toBe(1);
    });

    test("Doit retourner 0 si les conférences débutent au même moment", () => {
      expect(sortByStartDate(conference1, conference1)).toBe(0);
    });
  });

  describe("Test de la fonction toLocaleDate", () => {
    test("Doit formater correctement la date", () => {
      const date = "2023-05-28";
      const expected = "May 28, 2023";
      const result = toLocaleDate(date);
      expect(result).toEqual(expected);
    });
  });

  describe("Test de la fonction convertTime", () => {
    test("Doit formater correctement l'heure", () => {
      const date = "2023-05-28";
      const time = "09:30";
      const formattedTime = convertTime(date, time);
      expect(formattedTime).toBe("09:30 AM");
    });
  });

  describe("Test de la fonction isMorningTime", () => {
    test("Doit retourner true si l'heure est le matin", () => {
      const morningTime = "10:00";
      expect(isMorningTime(morningTime)).toBe(true);
    });

    test("Doit retourner false si l'heure est l'après-midi", () => {
      const afternoonTime = "15:00";
      expect(isMorningTime(afternoonTime)).toBe(false);
    });

    test("Doit retourner false si l'heure n'est pas spécifiée", () => {
      expect(isMorningTime()).toBe(false);
    });
  });

  describe("Test de la fonction getConferenceTimes", () => {
    test("Doit retourner les horaires de la conférence si les heures de début et de fin sont spécifiées", () => {
      const date = "2023-05-28";
      const startTime = "09:00";
      const endTime = "12:00";
      const conferenceTimes = getConferenceTimes(date, startTime, endTime);
      expect(conferenceTimes).toBe("09:00 AM - 12:00 PM");
    });

    test("Doit retourner la date formatée si les heures de début et de fin ne sont pas spécifiées", () => {
      const date = "2023-05-28";
      const conferenceTimes = getConferenceTimes(date);
      expect(conferenceTimes).toBe("May 28, 2023");
    });
  });

  describe("Test de la fonction getConferenceDate", () => {
    test("Doit retourner la date et les horaires de la conférence si les heuresde début et de fin sont spécifiées", () => {
      const date = "2023-05-28";
      const startTime = "09:00";
      const endTime = "12:00";
      const conferenceDate = getConferenceDate(date, startTime, endTime);
      expect(conferenceDate).toBe("May 28, 2023 · 09:00 AM - 12:00 PM");
    });

    test("Doit retourner la date formatée si les heures de début et de fin ne sont pas spécifiées", () => {
      const date = "2023-05-28";
      const conferenceDate = getConferenceDate(date);
      expect(conferenceDate).toBe("May 28, 2023");
    });
  });
});
