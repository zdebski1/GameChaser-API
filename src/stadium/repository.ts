import Stadium from "./model";
import fetch from 'node-fetch';
import cheerio from 'cheerio';

export async function getStadiums() {
  return Stadium.findAll();
}

export async function getStadiumsFromGoogleSheets() {
  const url = 'https://docs.google.com/spreadsheets/d/1p0R5qqR7XjoRG2mR5E1D_trlygHSqMOUdMgMpzq0gjU/htmlview';

  async function scrapeSheet() {
    const res = await fetch(url);
    const html = await res.text();
  
    const $ = cheerio.load(html);
    const data: any[] = [];
  
    $('table.waffle tbody tr').each((i, row) => {
      const rowData: string[] = [];
      $(row)
        .find('td')
        .each((j, cell) => {
          rowData.push($(cell).text().trim());
        });
      if (rowData.length > 0) {
        data.push(rowData);
      }
    });
  
    console.log(data);
  }
  
  scrapeSheet();
}
  