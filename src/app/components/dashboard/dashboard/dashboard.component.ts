import { Component,OnInit} from '@angular/core';

import * as dashboardData from '../../../shared/data/dashboard/dashboard'
import * as chartData from '../../../shared/data/charts/apex_chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit(){}


  width = '100%';
  height = 400;
  type = "usa";
  dataFormat = "json";
  dataSource = dashboardData.data;

  public statusData = dashboardData.StatusData;
  public orderData = dashboardData.OrderData;
  public recentCustomersData = dashboardData.RecentCustomersData;
  public recentCustomersData1 = dashboardData.RecentCustomersData1;
  public recentCustomersData2 = dashboardData.RecentCustomersData2;
  public recentCustomersData3 = dashboardData.RecentCustomersData3;
  public recentCustomersData4 = dashboardData.RecentCustomersData4;
  public recentCustomersData5 = dashboardData.RecentCustomersData5;


   //Sparkline using ApexCharts
   public apexSparkline = dashboardData.apexSparkline;
   public apexSparkline1 = dashboardData.apexSparkline1;
   public apexSparkline2 = dashboardData.apexSparkline2;
   public apexSparkline3 = dashboardData.apexSparkline3;
   public apexSparkline4 = dashboardData.apexSparkline4;



  public RandomData = chartData.ApexRandomData;
  public apexData = chartData.ApexChartData;
  public barData = chartData.BarData;
  public stackedbarData = chartData.StackedBarData;
  public donutData = chartData.DonutChartData;
  public pieData = chartData.PieChartData;
  public radicalbarData = chartData.RadialBarCircleData;
  public radicalmultipleData = chartData.RadialBarCircleMultipleData;


}



