import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent {
    @HostBinding('attr.class') cssClass = 'row';
    @Input() article: Article;

    constructor() {
        //this.article = new Article ('Angular', 'http://angular.io', 10);
    }

    voteUp() {
        this.article.voteUp();
        return false;
    }

    voteDown() {
        this.article.voteDown();
        return false;
    }
}