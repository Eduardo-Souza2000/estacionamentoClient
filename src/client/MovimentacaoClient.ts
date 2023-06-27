import axios, { AxiosInstance } from 'axios';
import { movimentacao } from "@/model/movimentacao";

export class MovimentacaoClient {
    
    private axiosClient: AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: {'Content-Type': 'application/json'}
        })
    }


    public  async findbyid(id:number) : Promise<movimentacao>{
        try{
            return (await this.axiosClient.get<movimentacao> (`/${id}`)).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async listAll() : Promise<movimentacao[]>{
        try{
            return (await this.axiosClient.get<movimentacao[]> ('/lista')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async findbyativo() : Promise<movimentacao[]>{
        try{
            return (await this.axiosClient.get<movimentacao[]> ('/ativo')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }


    public async cadastrar(movimentacao: movimentacao) :Promise<string>{
        try {
            return (await this.axiosClient.post<string>('',movimentacao)).data
        } catch (error: any) {
            return Promise.reject(error.response)   
        }

    }

    public async editar (id: number, movimentacao: movimentacao) :Promise<string>{
        try {
            return (await this.axiosClient.put<string>(`/${id}`, movimentacao)).data
            
        } catch (error: any) {
            return Promise.reject(error.response)   
        }
    }

    public async finalizar (id: number) :Promise<string>{
        try {
            return (await this.axiosClient.put<string>(`/finalizar/${id}`)).data
            
        } catch (error: any) {
            return Promise.reject(error.response)   
        }
    }

    public async delete (id:number) : Promise<string>{
        try{
            return (await this.axiosClient.delete<string>(`/${id}`)).data

        }
        catch(error:any)
        {
            return Promise.reject(error.response)

        }
    }


}
  