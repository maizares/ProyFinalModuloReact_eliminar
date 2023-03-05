import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class PictureAPI {
  
  static async pictureInitial(dateStart) {
    try {
      const response = await axios.get(`${BASE_URL}${API_KEY_PARAM}&start_date=${dateStart}&end_date=${dateStart}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  } 

  static async lastPictures(dateStart) {
    //console.log("EN RECOMENDATIONS=>" + dateStart)
    let fecha     = new Date(dateStart);
    fecha.setDate(fecha.getDate());
    let dia_fin   = fecha.getDate();
    let mes_fin   = fecha.getMonth() + 1; 
    let anio_fin  = fecha.getFullYear();

    fecha.setDate(fecha.getDate() - 4)
    let dia_ini   = fecha.getDate();
    let mes_ini   = fecha.getMonth() + 1; 
    let anio_ini  = fecha.getFullYear(); 

    let start_date = anio_ini+'-'+mes_ini+'-'+(dia_ini);
    let end_date   = anio_fin+'-'+mes_fin+'-'+(dia_fin);
    
    try {
      const response = await axios.get(`${BASE_URL}${API_KEY_PARAM}&start_date=${start_date}&end_date=${end_date}`
      );
      const result = response.data.reverse()
      return result;
    } catch (e) {
      console.log(e);
    }    
  }

  static async searchByDate(date) {
    try {
      const response = await axios.get(
        `${BASE_URL}${API_KEY_PARAM}&start_date=${date}&end_date=${date}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

}
