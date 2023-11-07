import { $, $$ } from '@wdio/globals';
import Pagina from './pagina';

class PostPage extends Pagina {
    public get inputMethod () {
        return $('#httpmethod');
    }

    public get inputEndpoint () {
        return $('#urlvalue');
    }

    public get btnAddParam () {
        return $('#addprambutton');
    }

    public get btnSubmit () {
        return $('#submitajax')
    }

    public get statusCode () {
        return $('#statuspre');
    }

    public async selectMethod(methodIndex: number) {
        return await (await this.inputMethod).selectByIndex(methodIndex);
    }

    public async setEndpoint (endpoint: string) {
        return (await this.inputEndpoint).setValue(endpoint);
    }

    public async addParams (numParams: number) {
        for (let i = 1; i <= numParams; i++) {
            (await this.btnAddParam).click();
        }
    }

    public async setParamsName (param1: string, param2: string) {
        const inputNames = await $$('.input-medium .fakeinputname');
        const params = [param1, param2];

        for(let i = 0; i < inputNames.length; i++) {
            inputNames[i].setValue(params[i]);
        }
    }

    public async setParamsValue (value1: string, value2: string) {
        const inputNames = await $$('.input-xlarge .realinputvalue');
        const params = [value1, value2];

        for(let i = 0; i < inputNames.length; i++) {
            inputNames[i].setValue(params[i]);
        }
    }

    public async performPostRequest () {
        return (await this.btnSubmit).click();
    }

    public async verifyStatusCode (code: number) {
        await expect(this.statusCode).toBeExisting();
        await expect(this.statusCode).toHaveTextContaining(String(code));
    }
}

export default new PostPage;