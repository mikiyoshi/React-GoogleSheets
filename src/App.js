import React, { useEffect, useState } from 'react';
import { Button, Form, Container, Header, Table } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

function App() {
  const [week, setWeek] = useState('');
  const [date, setDate] = useState('');
  const [rank, setRank] = useState('');
  const [word, setWord] = useState('');
  const [ipa, setIpa] = useState('');
  const [mean, setMean] = useState('');
  const [poSpeech, setPoSpeech] = useState('');
  const [anchor, setAnchor] = useState('');
  const [test, setTest] = useState('');
  const [random, setRandom] = useState('');
  const [order, setOrder] = useState('');
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [salary, setSalary] = useState('');
  // const [hobby, setHobby] = useState('');

  const [APIdata, setAPIdata] = useState([]);
  const [refresh, setRefresh] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const objt = {
      week,
      date,
      rank,
      word,
      ipa,
      mean,
      poSpeech,
      anchor,
      test,
      random,
      order,
    };

    axios
      .post(
        `https://sheet.best/api/sheets/d3e272fe-0d6f-44ff-86ec-82d17b9f3667`,
        objt
      )
      .then((response) => {
        console.log(response);
        setRefresh(response);
      });
  };

  useEffect(() => {
    axios
      .get(`https://sheet.best/api/sheets/d3e272fe-0d6f-44ff-86ec-82d17b9f3667`)
      .then((incomingData) => {
        setAPIdata(incomingData.data);
      });
  }, [refresh]);

  return (
    <Container fluid className="container">
      <Header as="h2">React google sheet</Header>
      <Form className="form">
        <Form.Field>
          <label>Week</label>
          <input
            placeholder="Enter your Week"
            onChange={(e) => setWeek(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <input
            placeholder="Enter your Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Rank</label>
          <input
            placeholder="Enter your Rank"
            onChange={(e) => setRank(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Word</label>
          <input
            placeholder="Enter your Word"
            onChange={(e) => setWord(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Ipa</label>
          <input
            placeholder="Enter your Ipa"
            onChange={(e) => setIpa(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Mean</label>
          <input
            placeholder="Enter your Mean"
            onChange={(e) => setMean(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>PoSpeech</label>
          <input
            placeholder="Enter your PoSpeech"
            onChange={(e) => setPoSpeech(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Anchor</label>
          <input
            placeholder="Enter your Anchor"
            onChange={(e) => setAnchor(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Test</label>
          <input
            placeholder="Enter your Test"
            onChange={(e) => setTest(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Random</label>
          <input
            placeholder="Enter your Random"
            onChange={(e) => setRandom(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Order</label>
          <input
            placeholder="Enter your Order"
            onChange={(e) => setOrder(e.target.value)}
          />
        </Form.Field>

        <Button color="blue" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Week</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Rank</Table.HeaderCell>
            <Table.HeaderCell>Word</Table.HeaderCell>
            <Table.HeaderCell>Ipa</Table.HeaderCell>
            <Table.HeaderCell>Mean</Table.HeaderCell>
            <Table.HeaderCell>PoSpeech</Table.HeaderCell>
            <Table.HeaderCell>Anchor</Table.HeaderCell>
            <Table.HeaderCell>Test</Table.HeaderCell>
            <Table.HeaderCell>Random</Table.HeaderCell>
            <Table.HeaderCell>Order</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIdata.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.week}</Table.Cell>
                <Table.Cell>{data.date}</Table.Cell>
                <Table.Cell>{data.rank}</Table.Cell>
                <Table.Cell>{data.word}</Table.Cell>
                <Table.Cell>{data.ipa}</Table.Cell>
                <Table.Cell>{data.mean}</Table.Cell>
                <Table.Cell>{data.poSpeech}</Table.Cell>
                <Table.Cell>{data.anchor}</Table.Cell>
                <Table.Cell>{data.test}</Table.Cell>
                <Table.Cell>{data.random}</Table.Cell>
                <Table.Cell>{data.order}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default App;
