import type { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '../data-table'
import { FreezersDialog } from '@/components/freezers/freezers-dialog'
import { Button } from '@/components/ui/button'
import {
  ArrowDown01,
  ArrowDownAz,
  ArrowUp01,
  ArrowUpAz,
  Eye,
} from 'lucide-react'
import { CustomersDialog } from '@/components/customers/customers-dialog'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type EventsProps = {
  id: number
  date: string
  freezerCode: string
  customerTradeName: string
  technitian?: string
  description?: string
}

const commonColumns: ColumnDef<EventsProps>[] = [
  {
    accessorKey: 'freezerCode',
    header: ({ column }) => {
      function toggleSorting() {
        column.toggleSorting(column.getIsSorted() === 'asc')
      }
      return (
        <div className="flex items-center">
          <span>Código do Freezer</span>

          <FreezersDialog>
            <Button variant="ghost">
              <Eye className="h-4 w-4" />
            </Button>
          </FreezersDialog>

          <Button variant="ghost" onClick={toggleSorting}>
            {column.getIsSorted() === 'asc' ? (
              <ArrowUp01 className="h-4 w-4" />
            ) : (
              <ArrowDown01 className="h-4 w-4" />
            )}
          </Button>
        </div>
      )
    },
  },
  {
    accessorKey: 'customerTradeName',
    header: ({ column }) => {
      function toggleSorting() {
        column.toggleSorting(column.getIsSorted() === 'asc')
      }
      return (
        <div className="flex items-center">
          <span>Customer Trade Name</span>

          <CustomersDialog>
            <Button variant="ghost">
              <Eye className="h-4 w-4" />
            </Button>
          </CustomersDialog>

          <Button variant="ghost" onClick={toggleSorting}>
            {column.getIsSorted() === 'asc' ? (
              <ArrowUpAz className="h-4 w-4" />
            ) : (
              <ArrowDownAz className="h-4 w-4" />
            )}
          </Button>
        </div>
      )
    },
  },
  {
    accessorKey: 'date',
    header: 'Data',
  },
]

const maintenanceColumns: ColumnDef<EventsProps>[] = [
  {
    accessorKey: 'technitian',
    header: 'Técnico',
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
  },
]

const columns = (
  type: 'MAINTENANCES' | 'DELIVERIES' | 'PICKUPS',
): ColumnDef<EventsProps>[] => {
  if (type === 'MAINTENANCES') {
    return [...commonColumns, ...maintenanceColumns]
  }
  return commonColumns
}

type EventsTableProps = {
  type: 'MAINTENANCES' | 'DELIVERIES' | 'PICKUPS'
}

export default function EventsTable({ type }: EventsTableProps) {
  const data: EventsProps[] = [
    {
      id: 1,
      date: new Date().toLocaleDateString('pt-BR'),
      customerTradeName: 'Atlântica Grill',
      freezerCode: 'P0001',
    },
    {
      id: 2,
      date: new Date().toLocaleDateString('pt-BR'),
      customerTradeName: 'Cursino',
      freezerCode: 'P0002',
    },
  ]

  return (
    <div className="container mx-auto">
      <DataTable columns={columns(type)} data={data} />
    </div>
  )
}
