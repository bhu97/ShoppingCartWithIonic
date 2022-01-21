import { Component, OnInit } from '@angular/core';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js'

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createNewScratchCard();

  }
  createNewScratchCard() {
    const scContainer = document.getElementById('js--sc--container')
    const sc = new ScratchCard('#js--sc--container', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: 300,//scContainer.offsetWidth,
      containerHeight: 300,
      imageForwardSrc: './assets/images/food.jpg',
      //imageBackgroundSrc: './assets/images/scratchcard-background.svg',
      htmlBackground: '<div class="cardamountcss"><div class="won-amnt">40%</div><div class="won-text">off on your order<br>Enjoy!</div></div>',
      clearZoneRadius: 40,
      nPoints: 30,
      pointSize: 4,
      callback: () => {
        console.log('Now the window will reload !')
      }
    })

    // Init
    sc.init();
  }
}