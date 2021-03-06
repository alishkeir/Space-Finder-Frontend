import { SpaceInterface } from "../models/Model";

export class DataService {
  public async getSpaces(): Promise<SpaceInterface[]> {
    const result: SpaceInterface[] = [];

    result.push({
      location: "Paris",
      name: "Best Location",
      spaceID: "123",
    });
    result.push({
      location: "Lopndon",
      name: "Another Best Location",
      spaceID: "124",
    });
    result.push({
      location: "Hamburg",
      name: "Better Location",
      spaceID: "125",
    });

    return result;
  }

  public async reserveSpace(spaceID: string): Promise<string | undefined> {
    if (spaceID === "123") {
      return "5555";
    } else {
      return undefined;
    }
  }
}
