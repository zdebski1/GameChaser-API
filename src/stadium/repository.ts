import Stadium from "./model";

export async function getStadiums() {
  return Stadium.findAll();
}