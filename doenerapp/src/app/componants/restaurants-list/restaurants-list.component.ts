import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', display: 'none' })
      ),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class RestaurantsListComponent {
  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      nameDesRestaurants: {
        title: 'Name des Restaurants',
      },
      address: {
        title: 'Adresse',
      },
      email: {
        title: 'Email',
      },
      phoneNummer: {
        title: 'Telefone Nummer',
      },
    },
  };
  settings2 = {
    columns: {
      id: {
      title: 'ID',
      },
      nameDesImbisses: {
        title: 'Name des Imbisses',
      },
      address: {
        title: 'Adresse',
      },
      email: {
        title: 'Email',
      },
      phoneNummer: {
        title: 'Telefone Nummer',
      },
    },
  };




  data = [
    {
      id: 1,
      nameDesRestaurants: 'test 1',
      address: 'Vissel',
      email: 'test1@landdata.de',
      phoneNummer: '123456789',
    },
    {
      id: 2,
      nameDesRestaurants: 'test 2',
      address: 'Scheeßel',
      email: 'test2@landdata.de',
      phoneNummer: '123456789',
    },
    {
      id: 3,
      nameDesRestaurants: 'test 3',
      address: 'Rotenburg',
      email: 'test3@landdata.de',
      phoneNummer: '123456789',
    },
    {
      id: 4,
      nameDesRestaurants: 'test 4',
      address: 'Bremen',
      email: 'test4@landdata.de',
      phoneNummer: '123456789',
    },
    {
      id: 5,
      nameDesRestaurants: 'test 5',
      address: 'Bothel',
      email: 'test5@landdata.de',
      phoneNummer: '123456789',
    },
  ];

  data2 = [
    {
      id: 1,
      nameDesImbisses: 'test 1',
      address: 'Vissel',
      email: 'test1@landdata.de',
      phoneNummer: '123456789',
    },
    {
      id: 2,
      nameDesImbisses: 'test 2',
      address: 'Scheeßel',
      email: 'test2@landdata.de',
      phoneNummer: '123456789',
    },
    {
      id: 3,
      nameDesImbisses: 'test 3',
      address: 'Rotenburg',
      email: 'test3@landdata.de',
      phoneNummer: '123456789',
    },
    {
      id: 4,
      nameDesImbisses: 'test 4',
      address: 'Bremen',
      email: 'test4@landdata.de',
      phoneNummer: '123456789',
    },
    {
      id: 5,
      nameDesImbisses: 'test 5',
      address: 'Bothel',
      email: 'test5@landdata.de',
      phoneNummer: '123456789',
    },
  ];
}
