import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server", name:'Test server', content:'hahha'}];
  listOfEvenCounters: number[] = [];
  listOfOddCounters: number[] = [];

  onServerAdded(serverData: {serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    console.log(this.serverElements)
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
    console.log(this.serverElements)
  }

  isEven( count: number ) {
    console.log('isEven', count % 2 === 0)
    return count % 2 === 0
  }

  onCounterIncreased(count: number ) {
    console.log('count ==>>', count)
    console.log('isEven', count % 2 === 0)
    console.log('listOfOddCounters', this.listOfOddCounters)
    console.log('listOfEvenCounters', this.listOfEvenCounters)
    if(this.isEven(count)) {
      this.listOfEvenCounters.push(count)
    } else {
      this.listOfOddCounters.push(count)
    }
  }

  onDelete() {
    console.log(this.serverElements.length - 1)
    this.serverElements.splice(this.serverElements.length - 1,1)
  }



}
