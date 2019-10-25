import { Component, OnInit } from '@angular/core'
import { SampleService } from '../sample.service'
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html'
})
export class SampleComponent implements OnInit {

  constructor(
    private sampleService:SampleService
  ) { }
  title:string = 'Component works'
  data:any = []

  ngOnInit() {
    this.data = this.sampleService.getSample()
  }

}
