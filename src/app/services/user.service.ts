import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private name: string;

  constructor() {
    
  }

  public setUser(name: string): void {
    this.name = name;
  }

  public getUser(): string {
    return this.name;
  }
}
