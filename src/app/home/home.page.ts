import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    private newtask : string
    private tableau1 : Array<string> = []
    private tableau2 : Array<string> = []
  constructor() {}

  nouvelletache() {
    if ((this.newtask.length === 0) || (this.tableau1.indexOf(this.newtask) !== -1)) {}
    else {this.tableau1.push(this.newtask)}
    this.newtask=''
  }

  supprimertache(task) {
    var confirmation = window.confirm("Voulez-vous supprimer la tâche ?")
    if (confirmation == true) {
      var index1 = this.tableau1.indexOf(task)
      this.tableau1.splice(index1, 1)
      var index2 = this.tableau2.indexOf(task)
      this.tableau2.splice(index1, 1)
    }

  }

  cocher(task) {
    var index = this.tableau1.indexOf(task)
    this.tableau2.push(task)
    this.tableau1.splice(index, 1)
  }

  decocher(task) {
    var index = this.tableau2.indexOf(task)
    this.tableau1.push(task)
    this.tableau2.splice(index, 1)
  }

}
