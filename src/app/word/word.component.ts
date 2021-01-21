import { Component } from '@angular/core';

@Component({
    templateUrl: './word.component.html',
    selector: 'app-word',
    styleUrls: ['./word.component.css']
})
export class WordComponent {
    statusShow = false;
    word = {        
        en: '',
        vn: ''
    };
    arrWords = [
        {id: 1, en: 'action', vn: 'diễn viên', memorize: true},
        {id: 2, en: 'actor', vn: 'diễn viên', memorize: false},
        {id: 3, en: 'house', vn: 'diễn viên', memorize: true},
        {id: 4, en: 'room', vn: 'diễn viên', memorize: false},
        {id: 5, en: 'mentor', vn: 'diễn viên', memorize: true},
    ]
    handleAddWord(){
        if(this.statusShow && this.word.en !== '' && this.word.vn !== ''){
            this.arrWords.push({
                id: this.arrWords.length + 1,
                en: this.word.en,
                vn: this.word.vn,
                memorize: false
            });
            this.word.en = '';
            this.word.vn = '';
            this.statusShow = !this.statusShow;
        }
        else this.statusShow = !this.statusShow;
    }
    // handleDelete(index:number) {
    //     this.arrWords.splice(index,1);
    // }
    handleDelete(id:number) {
        const index = this.arrWords.findIndex(word => word.id === id);
        this.arrWords.splice(index,1);
    }
}