import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LocateControl } from 'leaflet.locatecontrol';
import { MissionsPage } from '../missions/missions';
import { MapPage2Page } from '../map-page2/map-page2';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare var L: any

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html', 
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewWillEnter() {
    console.log('ionViewDidLoad MapPage');
    //Change coverageTreeManifest to mobile link when publishing to ios
     var map = L.Wrld.map("map", "f1e83049d9f153920ff635e55992cd9b",{ coverageTreeManifest: "https://webgl-cdn1.wrld3d.com/chunk/indoor_maps/api_requests/EIM-ad6cd210-0145-4881-878e-8f5455693527_2018_03_14_04_14_59/webgl_manifest.bin.gz",
        center: [39.52590569999999, -119.80886459999999],
        //maxBounds: [39.52590569999999, -119.80886459999999],
        zoom: 18,
        indoorsEnabled: true,
        tap: true
      });
      //set map boundaries so cant scroll away from museum **NOT WORKING**
      //var corner1 = L.latLng(39.22290569999999, -119.50486459999999),
      // corner2 = L.latLng(39.82990569999999, -119.91986459999999),
      //bounds = L.latLngBounds(corner1, corner2);
      //map.setMaxBounds(bounds);

      //map = L.map('map', {doubleClickZoom: false}).locate({setView: true, maxZoom: 16, tap: true, watch: true, enableHighAccuracy: true, fitBounds: [39.52590569999999, -119.80886459999999]});

      L.marker([39.52590369999999, -119.80865459999999], {indoorMapId:"EIM-ad6cd210-0145-4881-878e-8f5455693527", indoorMapFloorId: 0  }).addTo(map);

      //touch me popup to go indoors
      map.openPopup("Touch Me!", [39.52590569999999, -119.80886459999999], { elevation: 10.0 });

      //Sample highlighted area of museum 
      L.circle([39.52578148753415, -119.80921509900838], {
      radius: 1.0,
      indoorMapId: "EIM-ad6cd210-0145-4881-878e-8f5455693527",
      indoorMapFloorId: 0,
      color: "blue"
      }).addTo(map);

      L.circle([39.52571027963978, -119.80919503721776], {
      radius: 1.0,
      indoorMapId: "EIM-ad6cd210-0145-4881-878e-8f5455693527",
      indoorMapFloorId: 0,
      color: "blue"
      }).addTo(map);

      L.circle([39.525747943020825, -119.80902788424864], {
      radius: 1.0,
      indoorMapId: "EIM-ad6cd210-0145-4881-878e-8f5455693527",
      indoorMapFloorId: 0,
      color: "blue"
      }).addTo(map);

      L.circle([39.52581990527052, -119.80906928329938], {
      radius: 1.0,
      indoorMapId: "EIM-ad6cd210-0145-4881-878e-8f5455693527",
      indoorMapFloorId: 0,
      color: "blue"
      }).addTo(map);

      L.circle([39.52620262949059, -119.80869848179105], {
      radius: 1.0,
      indoorMapId: "EIM-ad6cd210-0145-4881-878e-8f5455693527",
      indoorMapFloorId: 0,
      color: "red"
      }).addTo(map);

      L.circle([39.52622603318108, -119.8085820464271], {
      radius: 1.0,
      indoorMapId: "EIM-ad6cd210-0145-4881-878e-8f5455693527",
      indoorMapFloorId: 0,
      color: "red"
      }).addTo(map);

      L.circle([39.52616691387283, -119.80858290368029], {
      radius: 1.0,
      indoorMapId: "EIM-ad6cd210-0145-4881-878e-8f5455693527",
      indoorMapFloorId: 0,
      color: "red"
      }).addTo(map);

      L.circle([39.52616762457792, -119.80864557083389], {
      radius: 1.0,
      indoorMapId: "EIM-ad6cd210-0145-4881-878e-8f5455693527",
      indoorMapFloorId: 0,
      color: "red",
      }).addTo(map);

      map.openPopup("Mission 1: Rover Mission!", [39.52624882180367, -119.80857799982343], { color: "red", indoorMapId: "EIM-ad6cd210-0145-4881-878e-8f5455693527",
      indoorMapFloorId: 0, closeOnClick: false });

      //debug for poi points to latLng
      map.on('click', function(e) {
          console.log(e.latlng);
      });

      //debug
      function onEnter(event) {
        console.log("Entered indoor map: " + event.indoorMap.getIndoorMapId());
        console.log("Entered indoor map: " + event.indoorMap.getIndoorMapName());
      }
        
      

      function onExit(event) {
          console.log("Exited indoor map");
      }
      map.indoors.on("indoormapenter", onEnter);
      map.indoors.on("indoormapexit", onExit)


  }

    goToMissions()
    {
      this.navCtrl.push(MissionsPage);
    }
}
