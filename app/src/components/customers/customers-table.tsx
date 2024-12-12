import { Button } from '@/components/ui/button'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowDownAz, ArrowUpAz } from 'lucide-react'
import { DataTable } from '../data-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CustomersProps = {
  id: number
  tradeName: string
  legalName: string
}

const columns: ColumnDef<CustomersProps>[] = [
  {
    accessorKey: 'tradeName',
    header: ({ column }) => {
      function toggleSorting() {
        column.toggleSorting(column.getIsSorted() === 'asc')
      }
      return (
        <div className="flex items-center">
          <span>Nome Fantasia</span>

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
    accessorKey: 'legalName',
    header: ({ column }) => {
      function toggleSorting() {
        column.toggleSorting(column.getIsSorted() === 'asc')
      }
      return (
        <div className="flex items-center">
          <span>Razão Social</span>

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

export default function CustomersTable() {
  const data: CustomersProps[] = [
    {
      id: 1,
      tradeName: 'Gatão',
      legalName: 'Gatão Distribuidora de Bebidas LTDA',
    },
    {
      id: 2,
      tradeName: 'Cursino',
      legalName: 'Cursino Pesca e Náutica LTDA',
    },
  ]

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
