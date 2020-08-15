import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private currentRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const serverId = +this.currentRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(+ serverId);
    this.currentRoute.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  OnEditServer() {
    this.router.navigate(['edit'],{relativeTo: this.currentRoute , queryParamsHandling:'preserve'})
  }
}
