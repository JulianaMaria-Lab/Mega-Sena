import { Props } from '../types';
import api from './api';

class Service {
  //async gera um Promise
  async get(numero: number): Promise<Props> {
    //{-} desestruturar o JSON
    const { data } = await api.get(`/${numero}`);
    return data;
  }
}

export default new Service();
