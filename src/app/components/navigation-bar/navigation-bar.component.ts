import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { WINDOW } from '../../WINDOW_PROVIDER';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject(WINDOW) private window: Window
    ) {}

  ngOnInit() {
  }

  
  isMobileMenu:boolean = false;

  mobileIconClick(){
    this.isMobileMenu = true;
    console.log("click mobile");
  }

  outsideClick(){
    this.isMobileMenu = false;
    console.log("click outside");
  }

  searchNavBarText:string ="";

  navSearch(){
    console.log(this.searchNavBarText);
  }

}
