// import React from "react";
import React, { useState,useRef } from 'react'
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";             
import {Fieldset } from 'primereact/fieldset';
import { Menubar } from 'primereact/menubar';
import Background from '../assests/1.jpg' 
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import logo from '../assests/nature-logo.png';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { MegaMenu } from 'primereact/megamenu';
import { SpeedDial } from 'primereact/speeddial';
// import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import '../css/movieTemplate.css';
// import './SpeedDialDemo.css'

// import { Button } from "react";

const MovieTemplate=()=>{

    const start = <img alt="logo" src={logo} height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" />;


    // const leftContents = (
    //     <div>
    //      <img height={"70px"} src={logo} ></img>
    //     </div>
    // );

    const rightContents = (
        <div >
            {/* <Button icon="pi pi-search" className="mr-2" /> */}
            <span  class="p-input-icon-left"><i class="pi pi-search"></i>
            <input style={{margin:"3px"}} placeholder="Search" class="p-inputtext p-component p-filled" value=""/></span>
            <Button style={{margin:"3px"}} icon="pi pi-calendar" className="p-button-success mr-2" />
            <Button style={{margin:"3px"}} label="SignIN" />
            <Button style={{margin:"3px"}} label="Register" />

        </div>
    );
    const toast = useRef(null);
    const menuitems = [
        {
           label:'File',
           icon:'pi pi-fw pi-file',
           items:[
              {
                 label:'New',
                 icon:'pi pi-fw pi-plus',
                 items:[
                    {
                       label:'Bookmark',
                       icon:'pi pi-fw pi-bookmark'
                    },
                    {
                       label:'Video',
                       icon:'pi pi-fw pi-video'
                    },
    
                 ]
              },
              {
                 label:'Delete',
                 icon:'pi pi-fw pi-trash'
              },
              {
                 separator:true
              },
              {
                 label:'Export',
                 icon:'pi pi-fw pi-external-link'
              }
           ]
        },
        {
           label:'Edit',
           icon:'pi pi-fw pi-pencil',
           items:[
              {
                 label:'Left',
                 icon:'pi pi-fw pi-align-left'
              },
              {
                 label:'Right',
                 icon:'pi pi-fw pi-align-right'
              },
              {
                 label:'Center',
                 icon:'pi pi-fw pi-align-center'
              },
              {
                 label:'Justify',
                 icon:'pi pi-fw pi-align-justify'
              },
    
           ]
        },
        {
           label:'Users',
           icon:'pi pi-fw pi-user',
           items:[
              {
                 label:'New',
                 icon:'pi pi-fw pi-user-plus',
    
              },
              {
                 label:'Delete',
                 icon:'pi pi-fw pi-user-minus',
    
              },
              {
                 label:'Search',
                 icon:'pi pi-fw pi-users',
                 items:[
                    {
                       label:'Filter',
                       icon:'pi pi-fw pi-filter',
                       items:[
                          {
                             label:'Print',
                             icon:'pi pi-fw pi-print'
                          }
                       ]
                    },
                    {
                       icon:'pi pi-fw pi-bars',
                       label:'List'
                    }
                 ]
              }
           ]
        },
        {
           label:'Events',
           icon:'pi pi-fw pi-calendar',
           items:[
              {
                 label:'Edit',
                 icon:'pi pi-fw pi-pencil',
                 items:[
                    {
                       label:'Save',
                       icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                       label:'Delete',
                       icon:'pi pi-fw pi-calendar-minus'
                    },
    
                 ]
              },
              {
                 label:'Archieve',
                 icon:'pi pi-fw pi-calendar-times',
                 items:[
                    {
                       label:'Remove',
                       icon:'pi pi-fw pi-calendar-minus'
                    }
                 ]
              }
           ]
        },
        {
           label:'Quit',
           icon:'pi pi-fw pi-power-off'
        }
     ];
    const items1 = [
        
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        }
    ];
    
    const items = [
        {
            label: 'Videos', icon: 'pi pi-fw pi-video',
            items: [
                [
                    {
                        label: 'Video 1',
                        items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                    },
                    {
                        label: 'Video 2',
                        items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                    }
                ],
                [
                    {
                        label: 'Video 3',
                        items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                    },
                    {
                        label: 'Video 4',
                        items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Users', icon: 'pi pi-fw pi-users',
            items: [
                [
                    {
                        label: 'User 1',
                        items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                    },
                    {
                        label: 'User 2',
                        items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                    },
                ],
                [
                    {
                        label: 'User 3',
                        items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                    },
                    {
                        label: 'User 4',
                        items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                    }
                ],
                [
                    {
                        label: 'User 5',
                        items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                    },
                    {
                        label: 'User 6',
                        items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
            items: [
                [
                    {
                        label: 'Event 1',
                        items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                    },
                    {
                        label: 'Event 2',
                        items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                    }
                ],
                [
                    {
                        label: 'Event 3',
                        items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                    },
                    {
                        label: 'Event 4',
                        items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                    },
                    {
                        label: 'Setting 2',
                        items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                    },
                    {
                        label: 'Setting 3',
                        items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                    }
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                    }
                ]
            ]
        }
    ]
     
    var sectionStyle = {
        width: "100%",
        height: "1000px",
        backgroundImage: `url(${Background})`
        // backgroundImage: "url(" + { Background } + ")"
      };


    return(
<section style={sectionStyle}>
       
    
<Toast ref={toast} />
<div className="card" style={{position:"fixed",width:"100%",zIndex:1}}>
<Menubar style={{marginTop:"2px",background:"#b93c84"}} model={menuitems} start={start} end={rightContents} />
</div>
<Fieldset style={{marginTop:'3px',opacity:0.4}}>
    
<div>
<div style={{margin:'50px',textAlign:"center"}}><h3><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></h3> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<div style={{display: 'flex',  justifyContent:'right', alignItems:'right'}}> <i class="p-input-icon-left"><i class="pi pi-search"></i>
            <InputText type="text" style={{margin:"3px",aligntext:"right"}} placeholder="Search" class="p-inputtext p-component" value=""/></i></div>
            </div>        </div>
</Fieldset>
{/* <Divider align="center"> */}
{/* <MegaMenu style={{background:"#B2BEB5"}} model={items} /> */}

    {/* <div className="inline-flex align-items-center"> */}
    

        {/* <i className="pi pi-user mr-2"></i> */}
        {/* <b>Icon</b> */}
    {/* </div> */}
{/* </Divider> */}

{/* <div>Content 2</div>

<Divider align="center">
    <span className="p-tag">Badge</span>
</Divider>*/}


<div>
<SpeedDial model={items1} radius={135} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />

</div>

</section>
    ); 
}
export default MovieTemplate;