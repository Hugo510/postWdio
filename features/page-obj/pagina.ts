import {browser} from '@wdio/globals'

export default class Pagina {
    public open (url: string) {
        return browser.url(url)
    }
}