import EventsTable from '@/components/events/events-table'
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import './App.css'

function App() {
  return (
    <main>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle />

        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="maintenances">Manutenções</TabsTrigger>
            <TabsTrigger value="deliveries">Entregas</TabsTrigger>
            <TabsTrigger value="pickups">Retiradas</TabsTrigger>
          </TabsList>

          <TabsContent value="maintenances">
            <EventsTable type="MAINTENANCES" />
          </TabsContent>

          <TabsContent value="deliveries">
            <EventsTable type="DELIVERIES" />
          </TabsContent>

          <TabsContent value="pickups">
            <EventsTable type="PICKUPS" />
          </TabsContent>
        </Tabs>
      </ThemeProvider>
    </main>
  )
}

export default App
