var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GSGS1Inch19411943_1 = new ol.layer.Tile({
            'title': 'GSGS 1 Inch 1941-1943',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mapseries-tilesets.s3.amazonaws.com/ireland/gsgs4136/{z}/{x}/{y}.png'
            })
        });

        var lyr_BartholomewQuarterInch1940_2 = new ol.layer.Tile({
            'title': 'Bartholomew Quarter Inch 1940 ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mapseries-tilesets.s3.amazonaws.com/ireland/bartholomew/{z}/{x}/{y}.png'
            })
        });

        var lyr_1InchOutline18981902_3 = new ol.layer.Tile({
            'title': '1 Inch Outline 1898-1902',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mapseries-tilesets.s3.amazonaws.com/os/ireland_1inch_2nd_outline/{z}/{x}/{y}.png'
            })
        });

        var lyr_1InchHills18591895NLS_4 = new ol.layer.Tile({
            'title': '1 Inch Hills 1859-1895 (NLS)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mapseries-tilesets.s3.amazonaws.com/os/ireland_1inch_1st_hills/{z}/{x}/{y}.png'
            })
        });

        var lyr_1InchOutline18601878NLS_5 = new ol.layer.Tile({
            'title': '1 Inch Outline 1860-1878 (NLS)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mapseries-tilesets.s3.amazonaws.com/os/ireland_1inch_1st_outline/{z}/{x}/{y}.png'
            })
        });
var lyr_DroneNoneBB_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Drone None BB<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DroneNoneBB_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-18306669.808520, -44927335.427097, 19010496.266438, 0.000000]
        })
    });
var lyr_DroneGreyscale_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Drone Greyscale<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DroneGreyscale_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-17186292.997955, -44927335.427097, 20033917.391473, 0.000000]
        })
    });
var lyr_DroneNoneGB_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Drone None GB<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DroneNoneGB_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-18601127.816424, -44927335.427097, 18464671.666420, 0.000000]
        })
    });
var lyr_DroneGRB_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Drone GRB<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DroneGRB_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19714322.724357, -44927335.427097, 18098394.632197, 0.000000]
        })
    });
var lyr_DroneZoomed_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Drone Zoomed<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DroneZoomed_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19301363.323027, -44927335.427097, 18091212.729565, 0.000000]
        })
    });
var lyr_Drone_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Drone<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Drone_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-16604558.884777, -44927335.427097, 19857960.776994, 0.000000]
        })
    });
var lyr_2010GoogleEarthBRG_12 = new ol.layer.Image({
        opacity: 1,
        
    title: '2010 Google Earth BRG<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2010GoogleEarthBRG_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19868733.630941, -44927335.427097, 19017678.169070, 0.000000]
        })
    });
var lyr_2010GoogleEarthRotated_13 = new ol.layer.Image({
        opacity: 1,
        
    title: '2010 Google Earth Rotated<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2010GoogleEarthRotated_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-18680128.745374, -44927335.427097, 19355227.592766, 0.000000]
        })
    });
var lyr_2024GoogleEarthGGBSlightZoom_14 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 Google Earth GGB Slight Zoom<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024GoogleEarthGGBSlightZoom_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19972871.219103, -44927335.427097, 17997847.995351, 0.000000]
        })
    });
var lyr_2024GoogleEarthBRG_15 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 Google Earth BRG<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024GoogleEarthBRG_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-18888403.921697, -44927335.427097, 19247499.053289, 0.000000]
        })
    });
var lyr_2024GoogleEarthBRGZoomed_16 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 Google Earth BRG Zoomed<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024GoogleEarthBRGZoomed_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -10446997.314775, 11688546.533294, 0.000000]
        })
    });
var lyr_2024GoogleEarthGGBZoomed_17 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 Google Earth GGB Zoomed<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024GoogleEarthGGBZoomed_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -44927335.427097, 13024380.422813, 0.000000]
        })
    });
var lyr_2024GoogleEarthGGB_18 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 Google Earth GGB<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024GoogleEarthGGB_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-17660298.571655, -44927335.427097, 19883097.436205, 0.000000]
        })
    });
var lyr_2024GoogleEarthrotated_19 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 Google Earth rotated<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024GoogleEarthrotated_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-18996132.461175, -44927335.427097, 18816584.895379, 0.000000]
        })
    });
var lyr_2024GoogleEarth_20 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 Google Earth<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024GoogleEarth_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19111042.903284, -44927335.427097, 19466547.083559, 0.000000]
        })
    });
var lyr_BallycloghDroneRGB_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ballyclogh Drone RGB<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BallycloghDroneRGB_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19714322.724357, -44927335.427097, 18098394.632197, 0.000000]
        })
    });
var lyr_2024GGB_22 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 GGB<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024GGB_22.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19678413.211198, -44927335.427097, 18141486.047988, 0.000000]
        })
    });
var lyr_2024GGBZoomed_23 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 GGB Zoomed<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024GGBZoomed_23.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19721504.626989, -44927335.427097, 19570684.671721, 0.000000]
        })
    });
var lyr_Ballyclogh2024_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ballyclogh 2024<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Ballyclogh2024_24.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19822051.263835, -44927335.427097, 18902767.726961, 0.000000]
        })
    });
var lyr_2024BallycloghZoomed_25 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 Ballyclogh Zoomed<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024BallycloghZoomed_25.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-18701674.453270, -44927335.427097, 20037508.342789, 0.000000]
        })
    });
var lyr_Ballyclogh2010Zoomed_26 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ballyclogh 2010 Zoomed<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Ballyclogh2010Zoomed_26.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-18787857.284852, -44927335.427097, 19649685.600671, 0.000000]
        })
    });
var lyr_2010Ballyclogh_27 = new ol.layer.Image({
        opacity: 1,
        
    title: '2010 Ballyclogh<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2010Ballyclogh_27.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19060769.584861, -44927335.427097, 19146952.416443, 0.000000]
        })
    });
var lyr_OPW_487_DTM_Hillshade_Properties_28 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM_Hillshade_Properties<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_Hillshade_Properties_28.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DSM_SLOPEtif_29 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DSM_SLOPE.tif<br />\
    <img src="styles/legend/OPW_487_DSM_SLOPEtif_29_0.png" /> 0.00838431<br />\
    <img src="styles/legend/OPW_487_DSM_SLOPEtif_29_1.png" /> 74.6501<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DSM_SLOPEtif_29.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DSM_HS_A315_H35tif_30 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DSM_HS_A315_H35.tif<br />\
    <img src="styles/legend/OPW_487_DSM_HS_A315_H35tif_30_0.png" /> 0<br />\
    <img src="styles/legend/OPW_487_DSM_HS_A315_H35tif_30_1.png" /> 0.99859<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DSM_HS_A315_H35tif_30.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DSM_MULTIHS_D16_H35tif_31 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DSM_MULTI-HS_D16_H35.tif<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DSM_MULTIHS_D16_H35tif_31.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905467.580544, -1002251.173017, 6908800.626315]
        })
    });
var lyr_OPW_487_DSM_MSTP_5_50_500_L09tif_32 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DSM_MSTP_5_50_500_L0.9.tif<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DSM_MSTP_5_50_500_L09tif_32.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DTM_SLOPEtif_33 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM_SLOPE.tif<br />\
    <img src="styles/legend/OPW_487_DTM_SLOPEtif_33_0.png" /> 0.00486831<br />\
    <img src="styles/legend/OPW_487_DTM_SLOPEtif_33_1.png" /> 22.1658<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_SLOPEtif_33.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DTM_MULTIHS_D16_H35tif_34 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM_MULTI-HS_D16_H35.tif<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_MULTIHS_D16_H35tif_34.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905467.580544, -1002251.173017, 6908800.626315]
        })
    });
var lyr_OPW_487_DTM_SLRM_R20tif_35 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM_SLRM_R20.tif<br />\
    <img src="styles/legend/OPW_487_DTM_SLRM_R20tif_35_0.png" /> -1.89861<br />\
    <img src="styles/legend/OPW_487_DTM_SLRM_R20tif_35_1.png" /> 2.58355<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_SLRM_R20tif_35.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DTM_OPENPOS_36 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM_OPEN-POS<br />\
    <img src="styles/legend/OPW_487_DTM_OPENPOS_36_0.png" /> 78.4695<br />\
    <img src="styles/legend/OPW_487_DTM_OPENPOS_36_1.png" /> 129.987<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_OPENPOS_36.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DTM_MSRM_37 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM_MSRM<br />\
    <img src="styles/legend/OPW_487_DTM_MSRM_37_0.png" /> -0.481248<br />\
    <img src="styles/legend/OPW_487_DTM_MSRM_37_1.png" /> 0.441043<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_MSRM_37.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DTM_MSTPcopycopycopy_38 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM_MSTP copy copy copy<br />\
    <img src="styles/legend/OPW_487_DTM_MSTPcopycopycopy_38_0.png" /> 0.0653<br />\
    <img src="styles/legend/OPW_487_DTM_MSTPcopycopycopy_38_1.png" /> 0.9867<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_MSTPcopycopycopy_38.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DTM_MSTPcopycopy_39 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM_MSTP copy copy<br />\
    <img src="styles/legend/OPW_487_DTM_MSTPcopycopy_39_0.png" /> 0.0037567<br />\
    <img src="styles/legend/OPW_487_DTM_MSTPcopycopy_39_1.png" /> 0.968994<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_MSTPcopycopy_39.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DSM_MULTIHS_D30_H50tif_40 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DSM_MULTI-HS_D30_H50.tif<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DSM_MULTIHS_D30_H50tif_40.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905467.580544, -1002251.173017, 6908800.626315]
        })
    });
var lyr_OPW_487_DTM_MULTIHS_D30_H50tif_41 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM_MULTI-HS_D30_H50.tif<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_MULTIHS_D30_H50tif_41.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905467.580544, -1002251.173017, 6908800.626315]
        })
    });
var lyr_OPW_487_DTM_MSTPcopy_42 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM_MSTP copy<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_MSTPcopy_42.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DTM_MSTP_43 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM_MSTP<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_MSTP_43.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DTM_44 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DTM<br />\
    <img src="styles/legend/OPW_487_DTM_44_0.png" /> 9.3599<br />\
    <img src="styles/legend/OPW_487_DTM_44_1.png" /> 27.9844<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DTM_44.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_OPW_487_DSM_45 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPW_487_DSM<br />\
    <img src="styles/legend/OPW_487_DSM_45_0.png" /> 9.78113<br />\
    <img src="styles/legend/OPW_487_DSM_45_1.png" /> 39.8798<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPW_487_DSM_45.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948272, 6905460.995471, -1002244.512827, 6908800.718005]
        })
    });
var lyr_HillshadeDTM_46 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hillshade DTM<br />\
    <img src="styles/legend/HillshadeDTM_46_0.png" /> 106<br />\
    <img src="styles/legend/HillshadeDTM_46_1.png" /> 213<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HillshadeDTM_46.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948257, 6905460.995434, -1002244.512812, 6908800.717968]
        })
    });
var lyr_HillshadeDSM_47 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hillshade DSM<br />\
    <img src="styles/legend/HillshadeDSM_47_0.png" /> 1<br />\
    <img src="styles/legend/HillshadeDSM_47_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HillshadeDSM_47.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948257, 6905460.995434, -1002244.512812, 6908800.717968]
        })
    });
var lyr_SlopeDTM_48 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Slope DTM<br />\
    <img src="styles/legend/SlopeDTM_48_0.png" /> 0.0027042<br />\
    <img src="styles/legend/SlopeDTM_48_1.png" /> 14.1821<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SlopeDTM_48.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948257, 6905460.995434, -1002244.512812, 6908800.717968]
        })
    });
var lyr_SLOPEDSMRGB_49 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE DSM RGB<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPEDSMRGB_49.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948257, 6905460.995434, -1002244.512812, 6908800.717968]
        })
    });
var lyr_SlopeDSM_50 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Slope DSM<br />\
    <img src="styles/legend/SlopeDSM_50_0.png" /> 0.0025887<br />\
    <img src="styles/legend/SlopeDSM_50_1.png" /> 66.5489<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SlopeDSM_50.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948257, 6905460.995434, -1002244.512812, 6908800.717968]
        })
    });
var lyr_TPIDTM_51 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TPI DTM<br />\
    <img src="styles/legend/TPIDTM_51_0.png" /> -0.277667<br />\
    <img src="styles/legend/TPIDTM_51_1.png" /> 0.2165<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TPIDTM_51.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948257, 6905460.995434, -1002244.512812, 6908800.717968]
        })
    });
var lyr_TPIDSM_52 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TPI DSM<br />\
    <img src="styles/legend/TPIDSM_52_0.png" /> -3.85036<br />\
    <img src="styles/legend/TPIDSM_52_1.png" /> 3.60283<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TPIDSM_52.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948257, 6905460.995434, -1002244.512812, 6908800.717968]
        })
    });
var lyr_TRIDTM_53 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TRI DTM<br />\
    <img src="styles/legend/TRIDTM_53_0.png" /> 0.00396156<br />\
    <img src="styles/legend/TRIDTM_53_1.png" /> 1.23468<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TRIDTM_53.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948257, 6905460.995434, -1002244.512812, 6908800.717968]
        })
    });
var lyr_TRIDSM_54 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TRI DSM<br />\
    <img src="styles/legend/TRIDSM_54_0.png" /> 0.00590933<br />\
    <img src="styles/legend/TRIDSM_54_1.png" /> 17.3395<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TRIDSM_54.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948257, 6905460.995434, -1002244.512812, 6908800.717968]
        })
    });
var lyr_RoughnessDTM_55 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Roughness DTM<br />\
    <img src="styles/legend/RoughnessDTM_55_0.png" /> 0.00575924<br />\
    <img src="styles/legend/RoughnessDTM_55_1.png" /> 1.72911<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RoughnessDTM_55.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948257, 6905460.995434, -1002244.512812, 6908800.717968]
        })
    });
var lyr_RoughnessDSM_56 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Roughness DSM<br />\
    <img src="styles/legend/RoughnessDSM_56_0.png" /> 0.00579262<br />\
    <img src="styles/legend/RoughnessDSM_56_1.png" /> 16.7046<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RoughnessDSM_56.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1005575.948257, 6905460.995434, -1002244.512812, 6908800.717968]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_GSGS1Inch19411943_1.setVisible(true);lyr_BartholomewQuarterInch1940_2.setVisible(true);lyr_1InchOutline18981902_3.setVisible(true);lyr_1InchHills18591895NLS_4.setVisible(true);lyr_1InchOutline18601878NLS_5.setVisible(true);lyr_DroneNoneBB_6.setVisible(true);lyr_DroneGreyscale_7.setVisible(true);lyr_DroneNoneGB_8.setVisible(true);lyr_DroneGRB_9.setVisible(true);lyr_DroneZoomed_10.setVisible(true);lyr_Drone_11.setVisible(true);lyr_2010GoogleEarthBRG_12.setVisible(true);lyr_2010GoogleEarthRotated_13.setVisible(true);lyr_2024GoogleEarthGGBSlightZoom_14.setVisible(true);lyr_2024GoogleEarthBRG_15.setVisible(true);lyr_2024GoogleEarthBRGZoomed_16.setVisible(true);lyr_2024GoogleEarthGGBZoomed_17.setVisible(true);lyr_2024GoogleEarthGGB_18.setVisible(true);lyr_2024GoogleEarthrotated_19.setVisible(true);lyr_2024GoogleEarth_20.setVisible(true);lyr_BallycloghDroneRGB_21.setVisible(true);lyr_2024GGB_22.setVisible(true);lyr_2024GGBZoomed_23.setVisible(true);lyr_Ballyclogh2024_24.setVisible(true);lyr_2024BallycloghZoomed_25.setVisible(true);lyr_Ballyclogh2010Zoomed_26.setVisible(true);lyr_2010Ballyclogh_27.setVisible(true);lyr_OPW_487_DTM_Hillshade_Properties_28.setVisible(true);lyr_OPW_487_DSM_SLOPEtif_29.setVisible(true);lyr_OPW_487_DSM_HS_A315_H35tif_30.setVisible(true);lyr_OPW_487_DSM_MULTIHS_D16_H35tif_31.setVisible(true);lyr_OPW_487_DSM_MSTP_5_50_500_L09tif_32.setVisible(true);lyr_OPW_487_DTM_SLOPEtif_33.setVisible(true);lyr_OPW_487_DTM_MULTIHS_D16_H35tif_34.setVisible(true);lyr_OPW_487_DTM_SLRM_R20tif_35.setVisible(true);lyr_OPW_487_DTM_OPENPOS_36.setVisible(true);lyr_OPW_487_DTM_MSRM_37.setVisible(true);lyr_OPW_487_DTM_MSTPcopycopycopy_38.setVisible(true);lyr_OPW_487_DTM_MSTPcopycopy_39.setVisible(true);lyr_OPW_487_DSM_MULTIHS_D30_H50tif_40.setVisible(true);lyr_OPW_487_DTM_MULTIHS_D30_H50tif_41.setVisible(true);lyr_OPW_487_DTM_MSTPcopy_42.setVisible(true);lyr_OPW_487_DTM_MSTP_43.setVisible(true);lyr_OPW_487_DTM_44.setVisible(true);lyr_OPW_487_DSM_45.setVisible(true);lyr_HillshadeDTM_46.setVisible(true);lyr_HillshadeDSM_47.setVisible(true);lyr_SlopeDTM_48.setVisible(true);lyr_SLOPEDSMRGB_49.setVisible(true);lyr_SlopeDSM_50.setVisible(true);lyr_TPIDTM_51.setVisible(true);lyr_TPIDSM_52.setVisible(true);lyr_TRIDTM_53.setVisible(true);lyr_TRIDSM_54.setVisible(true);lyr_RoughnessDTM_55.setVisible(true);lyr_RoughnessDSM_56.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GSGS1Inch19411943_1,lyr_BartholomewQuarterInch1940_2,lyr_1InchOutline18981902_3,lyr_1InchHills18591895NLS_4,lyr_1InchOutline18601878NLS_5,lyr_DroneNoneBB_6,lyr_DroneGreyscale_7,lyr_DroneNoneGB_8,lyr_DroneGRB_9,lyr_DroneZoomed_10,lyr_Drone_11,lyr_2010GoogleEarthBRG_12,lyr_2010GoogleEarthRotated_13,lyr_2024GoogleEarthGGBSlightZoom_14,lyr_2024GoogleEarthBRG_15,lyr_2024GoogleEarthBRGZoomed_16,lyr_2024GoogleEarthGGBZoomed_17,lyr_2024GoogleEarthGGB_18,lyr_2024GoogleEarthrotated_19,lyr_2024GoogleEarth_20,lyr_BallycloghDroneRGB_21,lyr_2024GGB_22,lyr_2024GGBZoomed_23,lyr_Ballyclogh2024_24,lyr_2024BallycloghZoomed_25,lyr_Ballyclogh2010Zoomed_26,lyr_2010Ballyclogh_27,lyr_OPW_487_DTM_Hillshade_Properties_28,lyr_OPW_487_DSM_SLOPEtif_29,lyr_OPW_487_DSM_HS_A315_H35tif_30,lyr_OPW_487_DSM_MULTIHS_D16_H35tif_31,lyr_OPW_487_DSM_MSTP_5_50_500_L09tif_32,lyr_OPW_487_DTM_SLOPEtif_33,lyr_OPW_487_DTM_MULTIHS_D16_H35tif_34,lyr_OPW_487_DTM_SLRM_R20tif_35,lyr_OPW_487_DTM_OPENPOS_36,lyr_OPW_487_DTM_MSRM_37,lyr_OPW_487_DTM_MSTPcopycopycopy_38,lyr_OPW_487_DTM_MSTPcopycopy_39,lyr_OPW_487_DSM_MULTIHS_D30_H50tif_40,lyr_OPW_487_DTM_MULTIHS_D30_H50tif_41,lyr_OPW_487_DTM_MSTPcopy_42,lyr_OPW_487_DTM_MSTP_43,lyr_OPW_487_DTM_44,lyr_OPW_487_DSM_45,lyr_HillshadeDTM_46,lyr_HillshadeDSM_47,lyr_SlopeDTM_48,lyr_SLOPEDSMRGB_49,lyr_SlopeDSM_50,lyr_TPIDTM_51,lyr_TPIDSM_52,lyr_TRIDTM_53,lyr_TRIDSM_54,lyr_RoughnessDTM_55,lyr_RoughnessDSM_56];
