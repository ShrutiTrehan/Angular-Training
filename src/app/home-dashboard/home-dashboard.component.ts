import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home-dashboard",
  templateUrl: "./home-dashboard.component.html",
  styleUrls: ["./home-dashboard.component.css"]
})
export class HomeDashboardComponent implements OnInit {
  aa = "dkj";
  constructor(private ht: HttpClient) {}

  ngOnInit() {
    this.ht.get("http://dummy.restapiexample.com/api/v1/employees").subscribe();
  }
}
