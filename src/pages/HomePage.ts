import { Page ,expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage{
    private searchInputArea:string= '#APjFqb';  
    private page:Page;
    constructor(page:Page) {
        super(page);
        this.page=page;
    }

    async searchText(text:string): Promise<void> {
        await this.browserActions.inputText(this.searchInputArea,text);
        await this.browserActions.pressEnter(this.searchInputArea);
        //await expect(this.page.getByTestId('todo-title')).toHaveText('');
    }
}
