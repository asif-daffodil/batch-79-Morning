import { Table } from 'flowbite-react';
import React from 'react';

const MarketPlace = () => {
    return (
        <div>
            <Table className='my-24'>
                <Table.Head>
                    <Table.HeadCell>
                        Product name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Color
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Category
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Abdulllah
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Apple MacBook Pro 17"
                        </Table.Cell>
                        <Table.Cell>
                            Sliver
                        </Table.Cell>
                        <Table.Cell>
                            Laptop
                        </Table.Cell>
                        <Table.Cell>
                            $2999
                        </Table.Cell>
                        <Table.Cell>
                                Abdulllah
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                        </Table.Cell>
                        <Table.Cell>
                            White
                        </Table.Cell>
                        <Table.Cell>
                            Laptop PC
                        </Table.Cell>
                        <Table.Cell>
                            $1999
                        </Table.Cell>
                        <Table.Cell>
                                Abdulllah
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Magic Mouse 2
                        </Table.Cell>
                        <Table.Cell>
                            Black
                        </Table.Cell>
                        <Table.Cell>
                            Accessories
                        </Table.Cell>
                        <Table.Cell>
                            $99
                        </Table.Cell>
                        <Table.Cell>
                                Abdulllah
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
};

export default MarketPlace;