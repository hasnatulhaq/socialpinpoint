import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [TableComponent ,  MatInputModule , MatButtonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {

}
