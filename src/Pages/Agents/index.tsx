import { Box, SimpleGrid, Modal, useMantineTheme, Loader   } from "@mantine/core";
import React, { useState } from "react";
import {
    AgentsCard,
    Header,
    
} from '../../Components/Index'
import { useAgents, useAgentsById } from "../../Hooks/useAgents";
import { IAgents } from "../../interfaces/IAgentes";



const Agents: React.FC = () => {
    const theme = useMantineTheme();
    const [ id, setId ] = useState('');
    const [ open, setOpen ]= useState(false);
    const { data: agentsData, isLoading } = useAgents();
    const { data: agent } = useAgentsById(id);

    console.log(agentsData)

    return (
        <Box sx={{backgroundColor: theme.colors.dark}} p="md">
            <Header />
            <SimpleGrid cols={4} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {!isLoading &&  agentsData?.data?.map((id:IAgents, index: number) => (
                    <AgentsCard 
                        colorOne={id.backgroundGradientColors[2]}
                        colorTwo={id.backgroundGradientColors[3]}
                        key={index}
                        title={id.displayName}
                        category={id.role.displayName}
                        image={id.fullPortrait}
                        onClick={() => {
                            setId(id.uuid)
                            setOpen(!open)
                        }}
                    />
                ))}

                {isLoading && (
                    <Loader size="xl" variant="oval" />
                )}
            </SimpleGrid>
            <Modal
                opened={open} 
                onClose={() => setOpen(!open)} 
                transition="fade"
                transitionDuration={600}
                transitionTimingFunction="ease"
                overlayBlur={10}
                centered={true}
            >
                <h1>
                    {agent?.data.displayName}
                </h1>
            </Modal>
        </Box>
    );
}

export default Agents;