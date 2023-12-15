import { define } from 'remount'      
import Hello from "./components/Hello"
import Graph from "./components/Graph"
import PanelBattery from './components/PanelBattery'
                                      
define({ 'hello-component': Hello, 'graph-component': Graph, 'battery-component':PanelBattery })
