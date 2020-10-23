/**
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
L.drawVersion = '0.4.2';
/**
 * @class L.Draw
 * @aka Draw
 *
 *
 * To add the draw toolbar set the option drawControl: true in the map options.
 *
 * @example
 * ```js
 *      var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 * ```
 *
 * ### Adding the edit toolbar
 * To use the edit toolbar you must initialise the Leaflet.draw control and manually add it to the map.
 *
 * ```js
 *      var map = L.map('map').setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 *
 *      // FeatureGroup is to store editable layers
 *      var drawnItems = new L.FeatureGroup();
 *      map.addLayer(drawnItems);
 *
 *      var drawControl = new L.Control.Draw({
 *          edit: {
 *              featureGroup: drawnItems
 *          }
 *      });
 *      map.addControl(drawControl);
 * ```
 *
 * The key here is the featureGroup option. This tells the plugin which FeatureGroup contains the layers that
 * should be editable. The featureGroup can contain 0 or more features with geometry types Point, LineString, and Polygon.
 * Leaflet.draw does not work with multigeometry features such as MultiPoint, MultiLineString, MultiPolygon,
 * or GeometryCollection. If you need to add multigeometry features to the draw plugin, convert them to a
 * FeatureCollection of non-multigeometries (Points, LineStrings, or Polygons).
 */
L.Draw = {};

/**
 * @class L.drawLocal
 * @aka L.drawLocal
 *
 * The core toolbar class of the API — it is used to create the toolbar ui
 *
 * @example
 * ```js
 *      var modifiedDraw = L.drawLocal.extend({
 *          draw: {
 *              toolbar: {
 *                  buttons: {
 *                      polygon: 'Draw an awesome polygon'
 *                  }
 *              }
 *          }
 *      });
 * ```
 *
 * The default state for the control is the draw toolbar just below the zoom control.
 *  This will allow map users to draw vectors and markers.
 *  **Please note the edit toolbar is not enabled by default.**
 */
L.drawLocal = {
	// format: {
	// 	numeric: {
	// 		delimiters: {
	// 			thousands: ',',
	// 			decimal: '.'
	// 		}
	// 	}
	// },
	draw: {
		toolbar: {
			// #TODO: this should be reorganized where actions are nested in actions
			// ex: actions.undo  or actions.cancel
			actions: {
				title: 'Abbrechen',
				text: 'Abbrechen'
			},
			finish: {
				title: 'Fertig',
				text: 'Fertig'
			},
			undo: {
				title: 'Letzten Punkt löschen',
				text: 'Letzten Punkt löschen'
			},
			buttons: {
				polyline: 'Linien zeichnen',
				polygon: 'Fläche zeichen',
				rectangle: 'Viereck zeichnen',
				circle: 'Kreis zeichnen (nur als Punkt übernommen)',
				marker: 'Markierung setzen',
				circlemarker: 'Runde Markierung setzen'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: 'Klicken und ziehen, um Größe zu ändern.'
				},
				radius: 'Radius'
			},
			circlemarker: {
				tooltip: {
					start: 'Markierung positionieren.'
				}
			},
			marker: {
				tooltip: {
					start: 'Markierung positionieren.'
				}
			},
			polygon: {
				tooltip: {
					start: 'Starten Sie eine Zeichnung',
					cont: 'Erweitern Sie das Areal',
					end: 'Zum Beenden auf den ersten Punkt klicken.'
				}
			},
			polyline: {
				error: '<strong>Error:</strong> shape edges cannot cross!',
				tooltip: {
					start: 'Starten Sie eine Zeichnung.',
					cont: 'Erweitern Sie die Linien',
					end: 'Klicken Sie zum Beenden auf den letzten Punkt'
				}
			},
			rectangle: {
				tooltip: {
					start: 'Click and drag to draw rectangle.'
				}
			},
			simpleshape: {
				tooltip: {
					end: 'Release mouse to finish drawing.'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'Änderungen speichern',
					text: 'Speichern'
				},
				cancel: {
					title: 'Abbrechen',
					text: 'Abbrechen'
				},
				clearAll: {
					title: 'Alle Layer löschen',
					text: 'Alles Löschen'
				}
			},
			buttons: {
				edit: 'Layer bearbeiten',
				editDisabled: 'Keine Layer zum Bearbeiten verfügbar',
				remove: 'Layern löschen',
				removeDisabled: 'Keine Layer zum Löschen verfügbar'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'Ziehen sie die Zeichnung mit den Vierecken',
					subtext: 'Abbrechen'
				}
			},
			remove: {
				tooltip: {
					text: 'Klicken Sie zum Löschen auf den Layer'
				}
			}
		}
	}
};
