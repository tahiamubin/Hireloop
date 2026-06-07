import { Avatar, Chip, Table } from "@heroui/react";

const RecentApplication = () => {
  return (
    <div>
      <Table >
        <Table.ResizableContainer>
          <Table.Content
            aria-label="Recent Applications"
            className="min-w-[700px]"
          >
            <Table.Header>
              <Table.Column isRowHeader defaultWidth="1fr" id="name" minWidth={160}>
                Candidate Name
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="role" minWidth={200}>
                Role
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="dateApplied" minWidth={150}>
                Date Applied
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="experience" minWidth={120}>
                Experience
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="status" minWidth={120}>
                Status
              </Table.Column>
            </Table.Header>

            <Table.Body  className="bg-[#1F1F1F] border-[#2D2D2D]">
              <Table.Row>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Avatar size="sm" />
                    <span className="font-semibold">Julianne Moore</span>
                  </div>
                </Table.Cell>
                <Table.Cell>Senior Product Designer</Table.Cell>
                <Table.Cell>Oct 24, 2023</Table.Cell>
                <Table.Cell>6 years</Table.Cell>
                <Table.Cell>
                  <Chip color="success" size="sm" variant="soft">Interviewing</Chip>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Avatar size="sm" />
                    <span className="font-semibold">Robert Downey</span>
                  </div>
                </Table.Cell>
                <Table.Cell>Backend Engineer</Table.Cell>
                <Table.Cell>Oct 23, 2023</Table.Cell>
                <Table.Cell>4 years</Table.Cell>
                <Table.Cell>
                  <Chip size="sm" variant="soft">New</Chip>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Avatar size="sm" />
                    <span className="font-semibold">Emma Stone</span>
                  </div>
                </Table.Cell>
                <Table.Cell>Marketing Lead</Table.Cell>
                <Table.Cell>Oct 22, 2023</Table.Cell>
                <Table.Cell>8 years</Table.Cell>
                <Table.Cell>
                  <Chip color="warning" size="sm" variant="soft">Reviewing</Chip>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Avatar size="sm" />
                    <span className="font-semibold">Chris Pratt</span>
                  </div>
                </Table.Cell>
                <Table.Cell>Product Manager</Table.Cell>
                <Table.Cell>Oct 21, 2023</Table.Cell>
                <Table.Cell>5 years</Table.Cell>
                <Table.Cell>
                  <Chip color="danger" size="sm" variant="soft">Rejected</Chip>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ResizableContainer>
      </Table>
    </div>
  );
};

export default RecentApplication;
