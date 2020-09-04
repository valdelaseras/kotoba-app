import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../model/user/user.model';
import { DataSetService } from '../../services/dataset/data-set.service';
import { IAvailableExam } from '../../services/dataset/available-exam.interface';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  currentUser: User;
  availableExams: IAvailableExam[];

  selectedAvailableExam: IAvailableExam;

  constructor( private userService: UserService, private datasetService: DataSetService ) {
    this.currentUser = this.userService.getCurrentUser();
    this.availableExams = this.datasetService.getAvailableExams();
  }

  selectAvailableExam(availableExam: IAvailableExam ): void {
    this.selectedAvailableExam = availableExam;
  }

  ngOnInit(): void {
  }
}
