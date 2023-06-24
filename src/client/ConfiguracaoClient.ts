import axios, { AxiosInstance } from 'axios';
import { configuracao } from "@/model/configuracao";

export class ConfiguracaoClient {
    
    private axiosClient: AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/configuracao',
            headers: {'Content-Type': 'application/json'}
        })
    }




    public  async findbyid(id:number) : Promise<configuracao>{
        try{
            return (await this.axiosClient.get<configuracao> (`/${id}`)).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async listAll() : Promise<configuracao[]>{
        try{
            return (await this.axiosClient.get<configuracao[]> ('/lista')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }


    public async cadastrar(configuracao: configuracao) :Promise<string>{
        try {
            return (await this.axiosClient.post<string>('',configuracao)).data
        } catch (error: any) {
            return Promise.reject(error.response)   
        }

    }

    public async editar (id: number, configuracao: configuracao) :Promise<string>{
        try {
            return (await this.axiosClient.put<string>(`/${id}`, configuracao)).data
            
        } catch (error: any) {
            return Promise.reject(error.response)   
        }
    }


}
  

export default new ConfiguracaoClient;