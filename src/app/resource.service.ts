import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { Resources } from './resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService extends BaseService{
  getResources: any;
  deleteResources: any;
  deleteResource(id: number) {
    throw new Error('Method not implemented.');
  }

  private apiServiceUrl = environment.apiBaseUrl;

}
