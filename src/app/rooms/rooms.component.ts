import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Duluxe Rooms',
      amenities: 'Air Condioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
      price: 500,
      photo: 'https://pixabay.com/photos/lobby-hotel-interior-hallway-398845/',
      checkinTime: new Date('11-nov-2023'),
      checkoutTime: new Date('12-nov-2023'),
      rating: 4.4,
    },
    {
      roomNumber: 2,
      roomType: 'Duluxe Rooms',
      amenities: 'Air Condioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
      price: 500,
      photo: 'https://pixabay.com/photos/lobby-hotel-interior-hallway-398846/',
      checkinTime: new Date('11-nov-2023'),
      checkoutTime: new Date('12-nov-2023'),
      rating: 4.8,
    },
    {
      roomNumber: 3,
      roomType: 'Duluxe Rooms',
      amenities: 'Air Condioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
      price: 1500,
      photo: 'https://pixabay.com/photos/lobby-hotel-interior-hallway-398847/',
      checkinTime: new Date('11-nov-2023'),
      checkoutTime: new Date('12-nov-2023'),
      rating: 4.49,
    },
    {
      roomNumber: 4,
      roomType: 'Duluxe Rooms',
      amenities: 'Air Condioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
      price: 5000,
      photo: 'https://pixabay.com/photos/lobby-hotel-interior-hallway-398845/',
      checkinTime: new Date('11-nov-2023'),
      checkoutTime: new Date('12-nov-2023'),
      rating: 9.4,
    },
  ];
}
