import Stadium from "./model";

export async function getStadiums() {
  return Stadium.findAll();
}


// import fetch from 'node-fetch';

// const SHEET_ID = '1p0R5qqR7XjoRG2mR5E1D_trlygHSqMOUdMgMpzq0gjU';
// const SHEET_TAB = '1'; // Default tab is usually '1'

// const url = `https://spreadsheets.google.com/feeds/list/${SHEET_ID}/${SHEET_TAB}/public/values?alt=json`;

// async function fetchSheetData() {
//   const response = await fetch(url);
//   const data = await response.json();

//   // Map entries into simple objects
//   const rows = data.feed.entry.map((entry: any) => {
//     const result: Record<string, string> = {};
//     for (const key in entry) {
//       if (key.startsWith('gsx$')) {
//         result[key.replace('gsx$', '')] = entry[key].$t;
//       }
//     }
//     return result;
//   });

//   console.log(rows);
// }

// fetchSheetData().catch(console.error);